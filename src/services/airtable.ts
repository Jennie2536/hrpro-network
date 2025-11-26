// src/services/airtable.ts

interface AirtableConfig {
    baseId: string;
    tableName: string;
    token: string;
}

interface ApplicationFormData {
    fullName: string;
    email: string;
    location: string;
    yearsOfExperience: string;
    areasOfExpertise: string;
    linkedinProfile?: string;
    resumeFile?: FileList;
    whyJoin: string;
}

interface ContactFormData {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

// Convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = (error) => reject(error);
    });
};

// Submit application form to Airtable
export const submitApplicationToAirtable = async (data: ApplicationFormData) => {
    const config: AirtableConfig = {
        baseId: import.meta.env.VITE_AIRTABLE_APPLICATION_BASE_ID,
        tableName: import.meta.env.VITE_AIRTABLE_APPLICATION_TABLE_NAME,
        token: import.meta.env.VITE_AIRTABLE_APPLICATION_TOKEN,
    };

    try {
        // Prepare the fields object
        const fields: Record<string, any> = {
            'Full Name': data.fullName,
            'Email': data.email,
            'Location': data.location,
            'Years of Experience': data.yearsOfExperience,
            'Areas of Expertise': data.areasOfExpertise,
            'Why Join': data.whyJoin,
        };

        // Add LinkedIn profile if provided
        if (data.linkedinProfile) {
            fields['LinkedIn Profile'] = data.linkedinProfile;
        }

        // Handle file upload if provided
        if (data.resumeFile && data.resumeFile.length > 0) {
            const file = data.resumeFile[0];
            const base64Content = await fileToBase64(file);

            // Airtable attachment format
            fields['Resume/CV'] = [
                {
                    filename: file.name,
                    url: `data:${file.type};base64,${base64Content}`,
                },
            ];
        }

        // Make API request to Airtable
        const response = await fetch(
            `https://api.airtable.com/v0/${config.baseId}/${encodeURIComponent(config.tableName)}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${config.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to submit application');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Airtable submission error:', error);
        throw error;
    }
};

// Submit contact form to Airtable
export const submitContactToAirtable = async (data: ContactFormData) => {
    const config: AirtableConfig = {
        baseId: import.meta.env.VITE_AIRTABLE_CONTACT_BASE_ID,
        tableName: import.meta.env.VITE_AIRTABLE_CONTACT_TABLE_NAME,
        token: import.meta.env.VITE_AIRTABLE_CONTACT_TOKEN,
    };

    try {
        const fields = {
            'Full Name': data.fullName,
            'Email': data.email,
            'Subject': data.subject,
            'Message': data.message,
        };

        const response = await fetch(
            `https://api.airtable.com/v0/${config.baseId}/${encodeURIComponent(config.tableName)}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${config.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to submit contact form');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Airtable submission error:', error);
        throw error;
    }
};
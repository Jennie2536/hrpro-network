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

// Upload file to Cloudinary and return public URL
const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error('Cloudinary configuration missing');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
        {
            method: 'POST',
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error('Failed to upload file to Cloudinary');
    }

    const data = await response.json();
    return data.secure_url; // This is the public URL
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
            'Why Join?': data.whyJoin,
        };

        // Add LinkedIn profile if provided
        if (data.linkedinProfile) {
            fields['LinkedIn Profile'] = data.linkedinProfile;
        }

        // Handle file upload if provided
        if (data.resumeFile && data.resumeFile.length > 0) {
            const file = data.resumeFile[0];

            // Upload to Cloudinary first
            const fileUrl = await uploadToCloudinary(file);

            // Add Cloudinary URL to Airtable
            fields['Resume/CV'] = [
                {
                    url: fileUrl,
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
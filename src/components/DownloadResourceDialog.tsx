import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CustomButton } from './CustomButton';
import { Download } from 'lucide-react';

interface DownloadResourceDialogProps {
  triggerText: string;
  resourceTitle: string;
  resourceDescription: string;
  downloadLink: string;
}

const DownloadResourceDialog: React.FC<DownloadResourceDialogProps> = ({
  triggerText,
  resourceTitle,
  resourceDescription,
  downloadLink,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CustomButton variant="secondary" className="mt-8">
          <Download size={20} className="mr-2" /> {triggerText}
        </CustomButton>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-hr-green">{resourceTitle}</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700 mt-2">
            {resourceDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
          <AlertDialogCancel className="w-full sm:w-auto bg-gray-200 text-gray-800 hover:bg-gray-300 border-none">Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <CustomButton variant="primary" className="w-full">
                Download Free Resource
              </CustomButton>
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DownloadResourceDialog;
import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

// export const API_URL = 'https://mern-task-manager-app-deploy-api.vercel.app';
export const API_URL = "https://task-manager1-api-git-main-rajat-kumar.vercel.app";

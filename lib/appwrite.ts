import { Client, Account } from 'appwrite';



export const config = {
    //platform: "com.tp",
    platform: "com.tp",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
   //bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
  };

  
  
export const client = new Client();
client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!);
//.setPlatform(config.platform!);

export const account = new Account(client);
export { ID } from 'appwrite';

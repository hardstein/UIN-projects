import sanityClient from '@sanity/client'

const options = {
  projectId: "9moz5hvi",
  dataset: "production",
  apiVersion: '2021-08-31',
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  // dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
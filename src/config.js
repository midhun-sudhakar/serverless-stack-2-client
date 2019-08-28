const dev = {
  s3: {
    REGION: "YOUR_DEV_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.zeefasys.net/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_b1gxedlnK",
    APP_CLIENT_ID: "4d57aumb7rjpid22k15bpmbg7q",
    IDENTITY_POOL_ID: "us-east-1:5ecb5ccf-1cbb-42e3-a491-79b92d08f012"
  }
};

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.zeefasys.net/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yaE87jFnu",
    APP_CLIENT_ID: "1pf9oc1b9trqlk46088egk9c6b",
    IDENTITY_POOL_ID: "us-east-1:d13b9c2f-113b-487a-8333-08e2295e5eeb"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

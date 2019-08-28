const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ue98bc1hjyh1"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://beup8cdu5c.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_xfHwHRzSo",
    APP_CLIENT_ID: "100hec5bcvu0ro1kc2cesjvv9s",
    IDENTITY_POOL_ID: "us-east-2:7a5708a3-5465-433c-92ab-06c12381bb3e"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-m69b8reyz66f"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8hew24xyxd.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_nekwkMtMw",
    APP_CLIENT_ID: "1ms73saua1vh7vvqohgj4duotg",
    IDENTITY_POOL_ID: "us-east-2:6280ff04-e17f-4467-8bfb-1cce628246a5"
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

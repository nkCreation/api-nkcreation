module.exports = ({ env }) => ({
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: env("MAILJET_PUBLIC_KEY"),
      secretApiKey: env("MAILJET_SECRET_KEY"),
    },
    settings: {
      defaultFrom: env("MAILJET_FROM"),
      defaultFromName: env("MAILJET_FROM_NAME"),
      defaultTo: env("MAILJET_TO"),
      defaultToName: env("MAILJET_TO_NAME"),
    },
  },
});

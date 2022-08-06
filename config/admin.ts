export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a48986fb4627dd025dffd3ac48978a5'),
  },
});

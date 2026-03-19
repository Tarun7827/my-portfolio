# Resend Email Integration Setup

This project uses the Resend API to handle contact form submissions.

## Setup Instructions

### 1. Get Your Resend API Key

1. Sign up for a free account at [Resend](https://resend.com)
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key (it will look like `re_xxxxxxxxx`)

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace `re_xxxxxxxxx` with your actual Resend API key:

```env
RESEND_API_KEY=re_YOUR_ACTUAL_API_KEY_HERE
```

### 3. Verify Your Email Domain (Optional for Production)

For production use, you should verify your own domain:
1. Go to [Resend Domains](https://resend.com/domains)
2. Add and verify your domain
3. Update the `from` field in `src/app/api/send-email/route.ts`:
   ```typescript
   from: 'contact@yourdomain.com', // Replace with your verified domain
   ```

**Note:** For testing, you can use the default `onboarding@resend.dev` address, but this is only for development purposes.

### 4. Update Recipient Email (Optional)

By default, emails are sent to `tarun7827@gmail.com`. To change this:

1. Open `src/app/api/send-email/route.ts`
2. Update the `to` field:
   ```typescript
   to: 'your-email@example.com',
   ```

### 5. Restart Your Development Server

After setting up your environment variables, restart your dev server:

```bash
npm run dev
```

## How It Works

1. User fills out the contact form
2. Form data is sent to `/api/send-email` endpoint
3. The API route uses Resend to send an email with the form details
4. User receives success/error feedback

## Features

- ✅ Real-time form validation
- ✅ Loading states during submission
- ✅ Success and error messages
- ✅ Beautiful HTML email formatting
- ✅ Form clears after successful submission
- ✅ Disabled button during submission to prevent duplicates

## Troubleshooting

### "Failed to send email" error
- Check that your `RESEND_API_KEY` is correctly set in `.env.local`
- Ensure you've restarted your dev server after adding the API key
- Verify your API key is valid in the [Resend dashboard](https://resend.com/api-keys)

### Email not arriving
- Check your spam folder
- For production, make sure you've verified your domain
- The default `onboarding@resend.dev` address is for testing only

## Files Modified/Created

- `src/app/api/send-email/route.ts` - API endpoint for sending emails
- `src/components/Contact.tsx` - Updated contact form with Resend integration
- `.env.local` - Environment variables (not committed to Git)
- `.env.example` - Example environment file

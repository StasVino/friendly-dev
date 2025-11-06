import { sub } from 'framer-motion/client';
import type { Route } from './+types';
import { Form } from 'react-router';

export async function action({ request }: Route.ActionArgs) {
  const formDate = await request.formData();
  const name = formDate.get('name');
  const email = formDate.get('email') as string;
  const subject = formDate.get('subject');
  const message = formDate.get('message');

  const errors: Record<string, string> = {};

  if (!name) errors.name = 'Name is required';

  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }

  if (!subject) errors.subject = 'Subject is required';
  if (!message) errors.message = 'Message is required';

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: 'Form submitted successfully', data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl t ext-white font-bold"> 🤝 Contact Me</h2>

      {actionData?.message ? (
        <p className="p-4 mb-6 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) : null}
      <Form className="space-y-6" method="post">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 text-gray-100"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 text-gray-100"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 text-gray-100"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 text-gray-100"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button className="w-full bg-blue-600 text0white py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('YourPublishableKey');
export { stripePromise };

import stripePackage from "stripe";
import { calculateCost } from  "./libs/billing-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    // Get the storage and source from the request body
    // storage: the number of notes the user would like to store
    // source: Stripe token for the card we are going to charge
    const { storage, source } = JSON.parse(event.body);
    // Calculate how much we should charge
    const amount = calculateCost(storage);
    const description = "Scratch charge";
    
    // Load our Stripe secret key from an environment variable
    const stripe = stripePackage(process.env.stripeSecretKey);

    try {
        await stripe.charges.create({
            source,
            amount,
            description,
            currency: "usd"
        });
        callback(null, success({ status: true }));
    } catch (e) {
        callback(null, failure({ message: e.message }));
    }
}
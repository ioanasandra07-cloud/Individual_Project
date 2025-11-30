import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller Function to Manage Clerk User with database

export const clerkWebhooks = async (req, res)=>{
        try {

            // 🔥 1. LOGURI DE DEBUG – VEZI DACĂ WEBHOOK-UL AJUNGE
    console.log("=== WEBHOOK HIT ===");
    console.log("HEADERS:", req.headers);
    console.log("RAW BODY:", req.body);

            const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

             // 🔥 2. LOG VERIFY
    console.log("=== VERIFY SIGNATURE... ===");

            await whook.verify(JSON.stringify(req.body), {
                "svix-id": req.headers["svix-id"],
                "svix-timestamp": req.headers["svix-timestamp"],
                "svix-signature": req.headers["svix-signature"]
            })

               console.log("=== SIGNATURE OK ===");


            const {data, type} = req.body

             console.log("TYPE:", type);
    console.log("DATA RECEIVED:", data);

            switch (type) {
                case 'user.created': {
                    const userData = {
                        _id: data.id,
                        email: data.email_addresses[0].email_address,
                        name: data.first_name + " " + data.last_name,
                        imageUrl: data.image_url,
                    }

                      console.log("CREATING USER:", userData);

                    await User.create(userData)


        console.log("=== USER SAVED IN MONGO ===");

                    res.json({})
                    break;
                }
                    
                   case 'user.updated': {

                    const userData = {
                       
                        email: data.email_address[0].email_address,
                        name: data.first_name + " " + data.last_name,
                        imageUrl: data.image_url,
                    }
                     await User.findByIdAndUpdate(data.id, userData)
                     res.json({})
                     break;
                   }
                   case 'user.deleted' : {
                    await User.findByIdAndDelete(data.id)
                    res.json({})
                    break;
                   }
                default:
                    break;
            }

        } catch (error) {

 console.error("=== WEBHOOK ERROR ===", error);
            
            res.json({success: false, message: error.message})
        }
}
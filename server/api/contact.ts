// server/api/contact.js
import { supabase } from '../../utils/supabase';

export default defineEventHandler(async (event:any) => {
    if (event.req.method === 'POST') {
        const body = await readBody(event);
        const { name, email, message } = body;

        try {
            const { data, error } = await supabase
                .from('contacts')
                .insert([{ name, email, message }]);

            if (error) {
                console.log(error)
                return {
                    statusCode: 500,
                    body: { error: error.message },
                };
            }

            return {
                statusCode: 201,
                body: data,
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: { error: 'Internal Server Error' },
            };
        }
    } else {
        return {
            statusCode: 405,
            body: { error: 'Method Not Allowed' },
        };
    }
});

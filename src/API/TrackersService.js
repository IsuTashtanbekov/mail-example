import axios from "axios";

export class TrackersService {
    static async checkTicket  (ticketId) {
        const response = await axios.get(`https://pay2.kyrgyzpost.kg/public/api/barcode/%20${ticketId}`)
        return response;
    }
}
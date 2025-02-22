import { withIronSessionApiRoute } from "iron-session/next/dist";
import { ironSessionOptions } from "../../helpers/session";

const handler = withIronSessionApiRoute(async (req, res) => {
    req.session.destroy();
    res.redirect("/store").end();
}, ironSessionOptions);

export default handler;

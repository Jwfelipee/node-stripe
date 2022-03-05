import { server } from "../../server";
import { StripeService } from "./Stripe.service";

export class StripeController {
  stripeService: StripeService;
  constructor() {
    this.stripeService = new StripeService();
    this.returnRoutes();
  }
  returnRoutes() {
    this.get();
    this.getById();
  }

  get() {
    server.get("/api/stripe", (req, res) => {
      res.send(this.stripeService.get());
    });
  }

  getById() {
    server.get("/api/stripe2", (req, res) => {
      res.send(this.stripeService.getById());
    });
  }
}

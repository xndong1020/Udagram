import * as express from "express";

export const checkAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const b64auth: string = (req.headers.authorization || "").split(" ")[1] || "";
  const [user, password]: string[] = Buffer.from(b64auth, "base64")
    .toString()
    .split(":");

  // if auth is good
  if (user === "admin" && password === "password") return next();

  // otherwise fail
  res.status(401).send("Authentication required.");
};

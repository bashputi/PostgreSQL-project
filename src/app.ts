import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';



const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Wrold')
  });

app.use("/api", router);
  
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!"
    }
  })
})
  
  export default app;
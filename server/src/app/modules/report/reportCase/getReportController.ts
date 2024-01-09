import { Request, Response } from "express";
import { GetReportUseCase } from "./getReportUseCase";

export class GetReportController {
  async handle(req: Request, res: Response){
    const { date } = req.query

    if (typeof date === 'string') {
      const parsedDate = new Date(date);

      if (!isNaN(parsedDate.getTime())) {
        const getReportUseCase = new GetReportUseCase();
        const result = await getReportUseCase.execute(parsedDate);
        return res.status(201).json(result);
      }
    }

    return res.status(400).json({ error: 'Data inválida' });
  }
}

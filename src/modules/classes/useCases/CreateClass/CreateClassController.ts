import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateClassService } from './CreateClassService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class CreateClassController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, video, date_init, date_end } = req.body;

        const createClassService = container.resolve(CreateClassService);

        const data = {
            name,
            description,
            video,
            date_init,
            date_end,
        };

        const result = await createClassService.execute(data);

        return res.status(StatusCode.CREATED).json(result);
    }
}

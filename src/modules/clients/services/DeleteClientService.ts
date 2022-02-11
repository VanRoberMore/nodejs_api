import { DeleteResult } from "typeorm";
import AppErrors from "../../../shared/errors/AppErrors";

import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

import FindClientByIdService from "./FindClientByIdService";

export default class DeleteClientService{
    public async execute(id: number): Promise<DeleteResult>{
        const clientRepository = new ClientRepository();

        if (!id) {
            throw new AppErrors("ID not valid | Client not found", 404);
        }

        const findClientById = new FindClientByIdService();
 
        await findClientById.execute(id);

        const deleteResult = await clientRepository.delete(id);

        return deleteResult;
    }
}
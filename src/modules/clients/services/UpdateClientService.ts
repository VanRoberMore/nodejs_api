import AppErrors from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

import FindClientByIdService from "./FindClientByIdService";

export default class UpdateClientService{
    public async execute(data: IClientDTO): Promise<Client>{
        const clientRepository = new ClientRepository();
        const findClientById = new FindClientByIdService();

        if (!data.id) {
            throw new AppErrors("ID not valid | Client not found", 404);
        }

        await findClientById.execute(Number(data.id));

        const clientPatch = await clientRepository.update(data);

        return clientPatch;
    }
}
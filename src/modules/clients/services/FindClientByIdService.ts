import AppErrors from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindClientByIdService {
    public async execute(id: number): Promise<Client | undefined> {
        const clientRepository = new ClientRepository();

        if (!id) {
            throw new AppErrors("ID not valid | Client not found", 404);
        }
        const clientById = await clientRepository.findById(id);
        return clientById;
    }
}
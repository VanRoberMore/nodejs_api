import AppErrors from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindClientByCpfService {
    public async execute(email: string): Promise<Client | undefined>{
        const clientRepository = new ClientRepository();

        if (!email) {
            throw new AppErrors("Email not valid | Client not found", 404);
        }

        const clientByEmail = await clientRepository.findByEmail(email);
        return clientByEmail;
    }
}
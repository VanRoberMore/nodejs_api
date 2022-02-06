import AppErrors from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindClientByCpfService from "./FindClientByCpfService";

export default class CreateClienteService {
    public async execute(data: IClientDTO): Promise<Client> {
        const clientRepository = new ClientRepository();

        const findByCpfservice = new FindClientByCpfService();

        if(data.id){
            throw new AppErrors("The ID field should not be sent as it is handled by the DBMS!", 422);
        }

        await findByCpfservice.execute(data.cpf);
        
        const newClient = await clientRepository.create(data);
        return newClient;
        }
}


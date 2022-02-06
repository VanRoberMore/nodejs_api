import { Request, Response } from "express";
import ClientRepository from "../../typeorm/repositories/ClientRepository";

import CreateClienteService from "../../../services/CreateClientService";
import UpdateClientService from "../../../services/UpdateClientService";

class ClientsController {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createCliente = new CreateClienteService();
    const client = await createCliente.execute(data);

    return response.json(client);
  }

  public async update(request: Request,response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    const updateClient = new UpdateClientService();

    const dataToUpdate = {...data , id: Number(id)};

    const clientUpdated = await updateClient.execute(dataToUpdate);

    return response.json(clientUpdated);
  }
    
  public async index(request: Request, response: Response): Promise<Response> {
    const clientRepository = new ClientRepository();
    const clients = await clientRepository.index();

    return response.json(clients);
  }

  public async findById(request: Request,response: Response): Promise<Response> {
    const { id } = request.params;

    const clientRepository = new ClientRepository();
    const clientById = await clientRepository.findById(Number(id));

    return response.json(clientById);
  }

  public async findByName(request: Request,response: Response): Promise<Response> {
    const { name } = request.params;

    const clientRepository = new ClientRepository();
    const clientByName = await clientRepository.findByName(name);

    return response.json(clientByName);
  }

  public async findByCpf(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const clientRepository = new ClientRepository();
    const clientByCpf = await clientRepository.findByCpf(cpf);

    return response.json(clientByCpf);

  }

  public async delete(request: Request,response: Response): Promise<Response> {
    const { id } = request.params;

    const clientRepository = new ClientRepository();
    await clientRepository.delete(Number(id));

    return response.json({ message: "Cliente removido com sucesso!" });
  }


}

export default new ClientsController();


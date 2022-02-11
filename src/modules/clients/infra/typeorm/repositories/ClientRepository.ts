import { DeleteResult, getRepository, Like, Repository } from "typeorm";
import IClientDTO from "../../../dtos/IClientDTO";
import IClientRepository from "../../../repositories/IClientRepository";

import Client from "../entities/Client";


export default class ClientRepository implements IClientRepository {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = getRepository(Client);
  }

  public async create(data: IClientDTO): Promise<Client> {
    const createClient = this.clientRepository.create(data);
      
    await this.clientRepository.save(createClient);

    return createClient;
  }

  public async update(data: Partial<IClientDTO>): Promise<Client> {
    
    const client = await this.clientRepository.save(data);

    return client;
  }
  
  public async index(): Promise<Client[]> {
    const clients = await this.clientRepository.find();

    return clients;
  }

  public async findById(id: number): Promise<Client | undefined> {
    const client = await this.clientRepository.findOne(Number(id));

    return client;
  }

  public async findByCpf(cpf: string): Promise<Client | undefined>{
    const client = await this.clientRepository.findOne({ where: { cpf: Like(`%${cpf}%`) },
    });

    return client;
  }

  
  public async findByName(name: string): Promise<Client | undefined> {
    const client = await this.clientRepository.findOne({where: { name: Like(`%${name}%`) }});

    return client;
  }     

  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.clientRepository.findOne({where: { email: Like(`%${email}%`) }});

    return client;
  }

  public async delete(id: number): Promise<DeleteResult> {
    const clientRepository = new ClientRepository();

    const deleteResult = await clientRepository.delete(Number(id));

    return deleteResult;
  }



}



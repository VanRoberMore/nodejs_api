import IClientDTO from "../../../dtos/IClientDTO";
import IClientRepository from "../../../repositories/IClientRepository";

import { DeleteResult, getRepository, Like, Repository } from "typeorm";
import Client from "../entities/Client";


export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
      
    await this.ormRepository.save(client);

    return client;
  }

  public async update(data: Partial<IClientDTO>): Promise<Client> {
    
    const client = await this.ormRepository.save(data);

    return client;
  }
  
  public async index(): Promise<Client[]> {
    const client = await this.ormRepository.find();

    return client;
  }

  public async findById(id: number): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(Number(id));

    return client;
  }

  public async findByCpf(cpf: string): Promise<Client | undefined>{
    const client = await this.ormRepository.findOne({ where: { cpf: Like(`%${cpf}%`) },
    });

    return client;
  }

  
  public async findByName(name: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({where: { name: Like(`%${name}%`) }});

    return client;
  }     

  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({where: { email: Like(`%${email}%`) }});

    return client;
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.ormRepository.delete(Number(id));
  }



}



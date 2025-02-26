import { ServiceList, ServiceStatus } from "./columns";

export async function getData(): Promise<ServiceList[]> {
  // TODO: Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52g",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52h",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52i",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52j",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52k",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52l",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52m",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52n",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52o",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52p",
      service: "API",
      status: ServiceStatus.UP,
      description: "Backend API service",
    },
    {
      id: "728ed52q",
      service: "API",
      status: ServiceStatus.DOWN,
      description: "Backend API service",
    },
    {
      id: "728ed52r",
      service: "Website",
      status: ServiceStatus.DOWN,
      description: "Website service",
    }
  ];
}

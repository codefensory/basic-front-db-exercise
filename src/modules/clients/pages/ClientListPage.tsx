import { Suspense, use, useState } from "react";
import { Client, localApi } from "../../../api/localApi";
import { BasicPageLayout } from "../../dashboard/layouts/BasicPageLayout";

interface ClientTableProps {
  clientsPromise: Promise<Client[]>;
}

const ITEMS_PER_PAGE = 5;

const TableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {/* Generamos 5 filas de skeleton */}
          {[1, 2, 3, 4, 5].map((index) => (
            <tr key={index}>
              <th>
                <div className="skeleton w-8 h-4"></div>
              </th>
              <td>
                <div className="skeleton w-32 h-4"></div>
              </td>
              <td>
                <div className="skeleton w-32 h-4"></div>
              </td>
              <td>
                <div className="skeleton w-48 h-4"></div>
              </td>
              <td>
                <div className="skeleton w-24 h-4"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ClientTable = ({ clientsPromise }: ClientTableProps) => {
  const clients = use(clientsPromise);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);

  const getCurrentPageClients = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const endIndex = startIndex + ITEMS_PER_PAGE;

    return clients.slice(startIndex, endIndex);
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageClients().map((client) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
                <td>{client.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <div className="join">
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              className={`join-item btn btn-sm ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
      <div className="text-center text-sm">
        Página {currentPage} de {totalPages} ({clients.length} registros
        totales)
      </div>
    </div>
  );
};

export const ClientListPage = () => {
  const clientPromise = localApi.getClients();

  return (
    <BasicPageLayout>
      <Suspense fallback={<TableSkeleton />}>
        <ClientTable clientsPromise={clientPromise} />
      </Suspense>
    </BasicPageLayout>
  );
};

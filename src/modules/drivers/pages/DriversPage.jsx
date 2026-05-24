import React from 'react';
import { Plus, Phone, Mail, Car, ShieldCheck, UserSquare2, Edit2, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../../../shared/ui/Table';
import { useDrivers } from '../hooks/useDrivers';

const DriversPage = () => {
  const { drivers, isLoading, removeDriver } = useDrivers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Conductores</h1>
          <p className="text-slate-400 mt-1">Gestión de personal operativo y licencias.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={18} /> Registrar Conductor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary"><ShieldCheck size={24} /></div>
            <div>
              <p className="text-sm font-medium text-slate-400">Licencias Válidas</p>
              <h3 className="text-2xl font-bold text-white">100%</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-success/10 rounded-xl text-success"><Car size={24} /></div>
            <div>
              <p className="text-sm font-medium text-slate-400">En Operación</p>
              <h3 className="text-2xl font-bold text-white">12 / 15</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><UserSquare2 size={24} /></div>
            <div>
              <p className="text-sm font-medium text-slate-400">Total Personal</p>
              <h3 className="text-2xl font-bold text-white">{drivers.length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">Cargando conductores...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Conductor</TableHead>
                  <TableHead>Licencia</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Vehículo</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${driver.name}`}
                            alt={driver.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="font-medium text-white">{driver.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-300">{driver.license}</code>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400"><Phone size={12} /> {driver.phone}</div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400"><Mail size={12} /> {driver.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{driver.vehicle}</TableCell>
                    <TableCell>
                      <Badge variant={driver.status === 'En Ruta' ? 'primary' : driver.status === 'Disponible' ? 'success' : 'default'}>
                        {driver.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Edit2 size={16} /></Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-danger hover:text-danger hover:bg-danger/10"
                          onClick={() => removeDriver(driver.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DriversPage;

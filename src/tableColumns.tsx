export const locationsColumns = [
  {
    accessorKey:"id",
    header: "ID",
  },
  {
    accessorKey: 'city',
    header: "Ciudad",
  },
  {
    accessorKey: 'country',
    header: "Pais",
  }
];

export const attractionsColumns = [
  {
    accessorKey:"id",
    header: "ID",
  },
  {
    accessorKey: 'name',
    header: "Nombre",
  },
  {
    accessorKey: 'Location.city',
    header: "Ciudad",
  },
  {
    accessorKey: 'Location.country',
    header: "Pais",
  },
  {
    accessorKey: 'latitude',
    header: "Latitud",
  },
  {
    accessorKey: 'longitude',
    header: "Longitud",
  },
  {
    accessorKey: 'hours',
    header: "Horario",
  },
  {
    accessorKey: 'duration',
    header: "Duración",
  },
  {
    accessorKey: 'price',
    header: "Precio",
  },
  {
    accessorKey: 'quantity',
    header: "Stock",
  },
  {
  accessorKey: "isActive",
  header: "Activa",
  },
];

export const usersColumns = [
  {
    accessorKey: "id",
    header: "ID"
  },
{
accessorKey: "name",
header: "Nombre"
},
{
accessorKey: "email",
header: "Email"
},
{
  accessorKey: "isActive",
  header: "Activo"
},
{
  accessorKey: "roleID",
  header: "Rol"
}
]
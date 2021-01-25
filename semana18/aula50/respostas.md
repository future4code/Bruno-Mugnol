# Exercício 1

### a)
Strings fornecem uma maior variedade de caracteres por dígito que um número, possibilitando-nos gerar um número maior de IDs com a mesma quantidade de dígitos e, por fim, minimizar a chance de gerar IDs iguais.



# Exercício 2

```typescript
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

### a)
O código acima utiliza o knex na variável **connection** para se conectar com o banco de dados MySQL. Utilizando essa conexão, há uma função que insere dados (passados por parâmetro) à tabela de nome *userTableName = **"User"*** localizada no banco de dados.

### b)
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### c)
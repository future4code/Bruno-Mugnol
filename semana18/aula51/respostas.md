# Exercício 1

### a)
Strings fornecem uma maior variedade de caracteres por dígito que um número, possibilitando-nos gerar um número maior de IDs com a mesma quantidade de dígitos e, por fim, minimizar a chance de gerar IDs iguais.



### b)
```typescript
import { v4 } from 'uuid'

export const generateId = (): string => {
    return v4()
}
```



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
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);
```


### c)
```sql
INSERT INTO Users (id, email, password)
  VALUES (
    "${id}",
    "${email}",
    "${password}"
  );
```



# Exercício 3

### a)
*as string* nos diz que a chave JWT_KEY guardada no arquivo .env será retornada, aqui, como string. Precisamos dela para se encaixar como o tipo do segundo parâmetro esperado pela função **jwt.sign**.

*Obs: o segundo parâmetro, em realidade, pede o tipo **jwt.Secret**, porém não temos acesso a essa tipagem.*

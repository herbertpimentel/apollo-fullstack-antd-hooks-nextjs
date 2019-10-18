const { Client } = require('pg')



export const resolvers = {
  Query: {
    async usuarios (parent, args, context, info) {
      const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "supersimples",
        password: "12345678",
        port: 5432
      });

      await client.connect();
      const res = await client.query('SELECT id, nome_usuario from usuario');
      await client.end() ;

      return res.rows;
    }
  },
  Mutation: {
    async mudarNome (parent, { id, nome } , context, info) {

      const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "supersimples",
        password: "12345678",
        port: 5432
      });

      await client.connect();
      const res = await client.query('update usuario set nome_usuario = $1 where id = $2 returning *', [nome, id]);
      await client.end() ;

      return res.rows[0];
    }
  }
}

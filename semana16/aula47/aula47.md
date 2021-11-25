# Exercício 1 

a) Vem com informaçoes a mais, informações do banco do MySQL.

b)
``` typescript
const getActorByName = async (name: string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `);
    return result[0][0];
};
```

c)
``` typescript
const countActorsByGender = async (gender: string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;

    return count;
};
```

# Exercício 2

a)
``` typescript
const updateActor = async (id: string, salary: number) => {
    return await connection("Actor")
        .update({
            salary: salary
        })
        .where({ id: id});
};
```

b)
``` typescript
const deleteActor = async (id: string) => {
    await connection("Actor")
        .delete()
        .where("id", id);
};
```

c)
``` typescript
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

# Exercício 3

a)
``` typescript
const getActorById = async (id: string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
    `);
    return result[0][0];
};

app.get("/actor/:id", async(req, res) => {
    try {
        const id = req.params.id
        const result = await getActorById(id)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
})
```
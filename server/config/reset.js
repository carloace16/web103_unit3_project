import { pool } from "./database.js";
import { locationsData, eventsData } from "../data/fantasyData.js";

const createTables = async () => {
  const createLocationsTableQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255),
            description TEXT
        );
    `;

  const createEventsTableQuery = `
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            date TIMESTAMP NOT NULL,
            description TEXT,
            location_id INTEGER NOT NULL REFERENCES locations(id)
        );
    `;

  try {
    await pool.query(createLocationsTableQuery);
    console.log("🎉 locations table created successfully");
    await pool.query(createEventsTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating tables", err);
  }
};

const seedTables = async () => {
  await createTables();

  try {
    for (const location of locationsData) {
      const insertQuery = `
                INSERT INTO locations (id, name, image, description)
                VALUES ($1, $2, $3, $4);
            `;
      const values = [
        location.id,
        location.name,
        location.image,
        location.description,
      ];
      await pool.query(insertQuery, values);
    }

    for (const event of eventsData) {
      const insertQuery = `
                INSERT INTO events (name, date, description, location_id)
                VALUES ($1, $2, $3, $4);
            `;
      const values = [
        event.name,
        event.date,
        event.description,
        event.location_id,
      ];
      await pool.query(insertQuery, values);
    }

    console.log("✅ All data seeded successfully");
  } catch (err) {
    console.error("⚠️ error seeding data", err);
  }
};

seedTables();

import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import {
    pgTable,
    varchar,
    serial,
    integer,
    boolean,
} from "drizzle-orm/pg-core";
import dotenv from "dotenv";

dotenv.config();

const Pool = pg.Pool;

export const pool = new Pool({
    connectionString: process.env.CONNECTIONSTRING,
});

export const db = drizzle(pool);

export const invitees = pgTable("invitees", {
    invitee_id: serial("invitee_id").primaryKey(),
    first_name: varchar("first_name"),
    last_name: varchar("last_name"),
    email: varchar("email"),
    rsvp: boolean("rsvp").default(false),
    dietary: varchar("dietary").default(""),
    guests: integer("guests").default(0),
    created_at: varchar("created_at"),
    submitted: boolean("submitted").default(false),
});

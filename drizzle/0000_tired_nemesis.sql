CREATE TABLE "guests" (
	"guest_id" serial PRIMARY KEY NOT NULL,
	"invitee_id" integer PRIMARY KEY NOT NULL,
	"firstname" varchar,
	"lastname" varchar,
	"dietary" varchar DEFAULT '',
	"created_at" varchar
);
--> statement-breakpoint
CREATE TABLE "invitees" (
	"invitee_id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar,
	"last_name" varchar,
	"email" varchar,
	"rsvp" boolean DEFAULT false,
	"dietary" varchar DEFAULT '',
	"guests" integer DEFAULT 0,
	"created_at" varchar,
	"submitted" boolean DEFAULT false
);

CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(255) DEFAULT 'user' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "property" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"price" numeric NOT NULL,
	"location" varchar(255) NOT NULL,
	"rooms" integer NOT NULL,
	"bathrooms" integer NOT NULL,
	"area" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"type_id" serial NOT NULL,
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "property_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "property_image" (
	"id" uuid PRIMARY KEY NOT NULL,
	"url" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"property_id" uuid
);
--> statement-breakpoint
ALTER TABLE "property" ADD CONSTRAINT "property_type_id_property_type_id_fk" FOREIGN KEY ("type_id") REFERENCES "public"."property_type"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "property" ADD CONSTRAINT "property_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "property_image" ADD CONSTRAINT "property_image_property_id_property_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id") ON DELETE no action ON UPDATE no action;
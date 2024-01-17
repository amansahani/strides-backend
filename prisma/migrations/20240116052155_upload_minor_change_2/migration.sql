-- AlterTable
CREATE SEQUENCE document_id_seq;
ALTER TABLE "Document" ALTER COLUMN "id" SET DEFAULT nextval('document_id_seq');
ALTER SEQUENCE document_id_seq OWNED BY "Document"."id";

import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCategory1548690901368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "label" character varying(500) NOT NULL,
          "minimumPrice" integer NOT NULL,
          "maximumPrice" integer NOT NULL,
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "category"`);
    }

}

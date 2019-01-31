import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnsToCategories1548943024828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "category" ADD "unit" character varying(500) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "category" ADD "placeholder" character varying(500) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "placeholder"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "unit"`);
    }

}

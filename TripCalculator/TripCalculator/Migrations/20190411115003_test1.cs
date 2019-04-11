using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TripCalculator.Migrations
{
    public partial class test1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateTime",
                table: "Trip");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Trip",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Trip");

            migrationBuilder.AddColumn<string>(
                name: "DateTime",
                table: "Trip",
                nullable: true);
        }
    }
}

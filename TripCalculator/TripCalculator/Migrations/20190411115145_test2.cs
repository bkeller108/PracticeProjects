using Microsoft.EntityFrameworkCore.Migrations;

namespace TripCalculator.Migrations
{
    public partial class test2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trip_Team_TeamId",
                table: "Trip");

            migrationBuilder.DropIndex(
                name: "IX_Trip_TeamId",
                table: "Trip");

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "Trip");

            migrationBuilder.AddColumn<string>(
                name: "TeamName",
                table: "Trip",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TeamName",
                table: "Trip");

            migrationBuilder.AddColumn<int>(
                name: "TeamId",
                table: "Trip",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Trip_TeamId",
                table: "Trip",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trip_Team_TeamId",
                table: "Trip",
                column: "TeamId",
                principalTable: "Team",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

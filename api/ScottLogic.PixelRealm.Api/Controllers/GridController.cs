using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ScottLogic.PixelRealm.Api.Models.Request;
using ScottLogic.PixelRealm.Api.Services;

namespace ScottLogic.PixelRealm.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GridController : ControllerBase
    {
        private readonly IGridService _gridService;

        public GridController(IGridService gridService)
        {
            _gridService = gridService;
        }

        [HttpPost]
        public async Task<ActionResult> CreateGrid([FromBody] Grid createGrid)
        {
            var grid = await _gridService.CreateGrid(createGrid);
            return Ok(new { grid.Id });
        }

        [HttpPut("{gridId:int}")]
        public async Task<ActionResult> SaveGrid(int gridId, [FromBody] Grid updateGrid)
        {
            var grid = await _gridService.UpdateGrid(gridId, updateGrid);
            if (grid == null)
            {
                return NotFound();
            }
            return Ok(grid);
        }
    }
}

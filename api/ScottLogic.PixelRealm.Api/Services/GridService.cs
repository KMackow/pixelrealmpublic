using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScottLogic.PixelRealm.Api.Models.Domain;
using ScottLogic.PixelRealm.Api.Models.Request;
using ScottLogic.PixelRealm.Api.Repositories;

namespace ScottLogic.PixelRealm.Api.Services
{
    public class GridService : IGridService
    {
        private readonly IGridRepository _gridRepository;

        public GridService(IGridRepository gridRepository)
        {
            _gridRepository = gridRepository;
        }

        public async Task<Models.Domain.Grid> CreateGrid(Models.Request.Grid createGrid)
        {
            var newGrid = new Models.Domain.Grid(createGrid.Contents);
            await _gridRepository.CreateGrid(newGrid);
            return newGrid;
        }

        public async Task<Models.Domain.Grid> UpdateGrid(int gridId, Models.Request.Grid updateGrid)
        {
            var targetGrid = await _gridRepository.LoadGrid(gridId);
            if (targetGrid == null) return null;
            targetGrid?.SetContents(updateGrid.Contents);
            await _gridRepository.UpdateGrid(targetGrid);
            return targetGrid;
        }
    }
}

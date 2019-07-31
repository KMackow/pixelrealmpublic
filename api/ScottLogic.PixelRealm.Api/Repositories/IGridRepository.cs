using ScottLogic.PixelRealm.Api.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScottLogic.PixelRealm.Api.Repositories
{
    public interface IGridRepository
    {
        Task CreateGrid(Grid grid);
        Task UpdateGrid(Grid grid);
        Task<Grid> LoadGrid(int gridId);
    }
}

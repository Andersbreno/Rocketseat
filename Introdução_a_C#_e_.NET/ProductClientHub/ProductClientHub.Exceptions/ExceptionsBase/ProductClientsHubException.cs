namespace ProductClientHub.Exceptions.ExceptionsBase
{
    public abstract class ProductClientsHubException : SystemException
    {
        public ProductClientsHubException(string errorMessage) : base(errorMessage)
        {

        }

        public abstract List<string> GetError();
    }
}

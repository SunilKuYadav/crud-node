const globalControllers = {
  healthCheck(req: any, res: any) {
    res.send("<h2>API is running</h2>");
  },
};

export default globalControllers;

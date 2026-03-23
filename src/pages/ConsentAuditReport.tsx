import { getAuditLog } from "@/lib/consent";

const ConsentAuditReport = () => {
  const log = getAuditLog();
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Auditoria de Consentimentos</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {log.length === 0 ? (
            <p className="text-muted-foreground">Nenhum consentimento registrado ainda.</p>
          ) : (
            log.map((entry, idx) => (
              <div key={idx} className="border rounded-xl p-4 bg-card">
                <div className="text-sm text-muted-foreground">{entry.timestamp}</div>
                <div className="mt-1 text-foreground">Status: {entry.accepted ? "Aceito" : "Recusado"}</div>
                <div className="text-foreground">Marketing: {entry.marketing ? "sim" : "não"}</div>
                <div className="text-foreground">Analytics: {entry.analytics ? "sim" : "não"}</div>
                <div className="text-muted-foreground text-xs">Política: {entry.policyVersion}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsentAuditReport;

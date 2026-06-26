"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { api } from "../../../../convex/_generated/api";
import { Loader2, Mail, ExternalLink, Handshake } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function InboxPage() {
  const applications = useQuery(api.inbox.getApplications);
  const partnerships = useQuery(api.inbox.getPartnerships);
  const updateAppStatus = useMutation(api.inbox.updateApplicationStatus);
  const updatePartStatus = useMutation(api.inbox.updatePartnershipStatus);

  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [selectedPart, setSelectedPart] = useState<any | null>(null);

  if (applications === undefined || partnerships === undefined) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Inbox</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Review program applications and partnership requests.
        </p>
      </div>

      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="applications">Program Applications ({applications.length})</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships ({partnerships.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <div className="rounded-md border border-zinc-200 bg-white shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount Paid</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24 text-zinc-500">
                      No applications found.
                    </TableCell>
                  </TableRow>
                ) : (
                  applications.map((app) => (
                    <TableRow 
                      key={app._id} 
                      className="cursor-pointer hover:bg-zinc-50"
                      onClick={() => setSelectedApp(app)}
                    >
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>{app.email}</TableCell>
                      <TableCell>GH₵ {app.amount}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          app.paymentStatus === 'success' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                          app.paymentStatus === 'pending' ? 'bg-amber-50 text-amber-700 ring-amber-600/20' :
                          'bg-red-50 text-red-700 ring-red-600/20'
                        }`}>
                          {app.paymentStatus}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="partnerships">
          <div className="rounded-md border border-zinc-200 bg-white shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnerships.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24 text-zinc-500">
                      No partnership requests found.
                    </TableCell>
                  </TableRow>
                ) : (
                  partnerships.map((part) => (
                    <TableRow 
                      key={part._id} 
                      className="cursor-pointer hover:bg-zinc-50"
                      onClick={() => setSelectedPart(part)}
                    >
                      <TableCell className="font-medium">{part.name}</TableCell>
                      <TableCell>{part.organization || "N/A"}</TableCell>
                      <TableCell>{part.email}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          part.status === 'reviewed' ? 'bg-blue-50 text-blue-700 ring-blue-600/20' :
                          'bg-zinc-50 text-zinc-600 ring-zinc-500/10'
                        }`}>
                          {part.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Application Details Sheet */}
      <Sheet open={!!selectedApp} onOpenChange={(isOpen) => !isOpen && setSelectedApp(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Application Details</SheetTitle>
            <SheetDescription>Full breakdown of this student's application.</SheetDescription>
          </SheetHeader>
          {selectedApp && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Applicant Name</h3>
                <p className="mt-1 text-base text-zinc-900">{selectedApp.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Email Address</h3>
                <a href={`mailto:${selectedApp.email}`} className="mt-1 text-base text-blue-600 hover:underline flex items-center">
                  <Mail className="h-4 w-4 mr-1" /> {selectedApp.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Course ID (Reference)</h3>
                <p className="mt-1 text-sm font-mono text-zinc-900">{selectedApp.courseId}</p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-md border border-zinc-200">
                <h3 className="text-sm font-medium text-zinc-900 mb-2">Payment Info</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zinc-500 block">Amount</span>
                    <span className="font-medium">GH₵ {selectedApp.amount}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Status</span>
                    <span className="font-medium capitalize">{selectedApp.paymentStatus}</span>
                  </div>
                  {selectedApp.paymentReference && (
                    <div className="col-span-2">
                      <span className="text-zinc-500 block">Paystack Ref</span>
                      <span className="font-mono text-xs">{selectedApp.paymentReference}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    updateAppStatus({ id: selectedApp._id, paymentStatus: "success" });
                    setSelectedApp({ ...selectedApp, paymentStatus: "success" });
                  }}
                  disabled={selectedApp.paymentStatus === "success"}
                >
                  Mark as Paid
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Partnership Details Sheet */}
      <Sheet open={!!selectedPart} onOpenChange={(isOpen) => !isOpen && setSelectedPart(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Partnership Request</SheetTitle>
            <SheetDescription>Review details from this potential partner.</SheetDescription>
          </SheetHeader>
          {selectedPart && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Contact Name</h3>
                <p className="mt-1 text-base text-zinc-900">{selectedPart.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Organization</h3>
                <p className="mt-1 text-base text-zinc-900">{selectedPart.organization || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Email Address</h3>
                <a href={`mailto:${selectedPart.email}`} className="mt-1 text-base text-blue-600 hover:underline flex items-center">
                  <Mail className="h-4 w-4 mr-1" /> {selectedPart.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Message</h3>
                <div className="mt-2 text-sm text-zinc-700 bg-zinc-50 p-4 rounded-md border border-zinc-200 whitespace-pre-wrap">
                  {selectedPart.message}
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <Button 
                  className="w-full"
                  onClick={() => {
                    updatePartStatus({ id: selectedPart._id, status: "reviewed" });
                    setSelectedPart({ ...selectedPart, status: "reviewed" });
                  }}
                  disabled={selectedPart.status === "reviewed"}
                >
                  Mark as Reviewed
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
